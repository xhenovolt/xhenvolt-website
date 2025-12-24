'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Invoice {
  invoiceId: string;
  clientName: string;
  clientAddress: string;
  serviceDescription: string;
  totalAmount: number;
  amountPaid: number;
  balance: number;
  status: 'Paid' | 'Partially Paid' | 'Unpaid';
  issuedBy: string;
  issueDate: string;
  currency: string;
}

export default function VerifyContent() {
  const searchParams = useSearchParams();
  const invoiceId = searchParams.get('invoice');
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        // Fetch invoices from the public directory
        const response = await fetch('/invoices.json');
        if (!response.ok) {
          throw new Error('Unable to load invoice database');
        }

        const invoicesData: Record<string, Invoice> = await response.json();

        if (!invoiceId) {
          setError('No invoice ID provided in URL');
          setLoading(false);
          return;
        }

        // Look up invoice by ID (keys are invoice IDs)
        const foundInvoice = invoicesData[invoiceId.toUpperCase()];

        if (foundInvoice) {
          setInvoice(foundInvoice);
        } else {
          setError(`Invoice ID "${invoiceId}" not found in our system.`);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to load invoice database'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchInvoice();
  }, [invoiceId]);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Partially Paid':
        return 'bg-amber-100 text-amber-800';
      case 'Unpaid':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBorderColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'border-green-500 bg-green-50';
      case 'Partially Paid':
        return 'border-amber-500 bg-amber-50';
      case 'Unpaid':
        return 'border-red-500 bg-red-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Invoice Verification
          </h1>
          <p className="text-gray-600">
            Verify the authenticity of your Xhenvolt invoice
          </p>
        </div>

        {loading ? (
          // Loading state
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
            <p className="text-gray-600">Verifying invoice...</p>
          </div>
        ) : error ? (
          // Error / Not Found state
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4v2m0 0H8m4 0h4"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-red-800">
                    Invoice Not Found
                  </h3>
                  <p className="mt-2 text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>

            {/* Help section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3">Need Help?</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>
                  • Check that the invoice ID is spelled correctly (example:
                  XHV-INV-2025-0001)
                </li>
                <li>
                  • Verify the ID matches what appears on your invoice document
                </li>
                <li>
                  • Contact our support team if you believe this is an error
                </li>
              </ul>
            </div>
          </div>
        ) : invoice ? (
          // Valid invoice state
          <div className="space-y-8">
            {/* Verified badge */}
            <div className={`rounded-lg shadow-lg p-6 border-2 ${getStatusBorderColor(invoice.status)}`}>
              <div className="flex items-center justify-center space-x-3">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-bold text-green-900 text-lg">
                    Invoice Verified
                  </p>
                  <p className="text-sm text-green-700">
                    This invoice is authentic and registered in our system
                  </p>
                </div>
              </div>
            </div>

            {/* Invoice details */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Invoice header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
                <h2 className="text-3xl font-bold">{invoice.invoiceId}</h2>
                <p className="text-blue-100 mt-2">{invoice.serviceDescription}</p>
              </div>

              {/* Invoice body */}
              <div className="p-8 space-y-8">
                {/* Client Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Client Name
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {invoice.clientName}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {invoice.clientAddress}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Payment Status
                    </h3>
                    <div
                      className={`inline-block px-4 py-2 rounded-lg text-sm font-bold ${getStatusColor(invoice.status)}`}
                    >
                      {invoice.status}
                    </div>
                  </div>
                </div>

                {/* Financial Summary */}
                <div className="border-t pt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
                    Financial Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Total Amount
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formatCurrency(invoice.totalAmount, invoice.currency)}
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Amount Paid
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {formatCurrency(invoice.amountPaid, invoice.currency)}
                      </p>
                    </div>

                    <div className={`rounded-lg p-4 border ${
                      invoice.balance > 0 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
                    }`}>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Balance
                      </p>
                      <p className={`text-2xl font-bold ${
                        invoice.balance > 0 ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {formatCurrency(invoice.balance, invoice.currency)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Issue Date
                    </h3>
                    <p className="text-lg font-medium text-gray-900">
                      {formatDate(invoice.issueDate)}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Issued By
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      {invoice.issuedBy}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Reference
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                You can share this verification link with stakeholders:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm break-all">
                <code className="text-blue-600">
                  {typeof window !== 'undefined'
                    ? `${window.location.origin}/verify?invoice=${invoice.invoiceId}`
                    : `/verify?invoice=${invoice.invoiceId}`}
                </code>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                💡 This link can be encoded in a QR code for easy sharing
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-amber-900">Important Note</h4>
                  <p className="text-sm text-amber-800 mt-1">
                    This page confirms invoice authenticity only. It is not a
                    receipt. For official records, please refer to the original
                    invoice document.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Footer with back link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 12H5m7 7l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

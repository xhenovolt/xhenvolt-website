import { Suspense } from 'react';
import VerifyContent from './verify-content';

export default function VerifyPage() {
  return (
    <Suspense fallback={<VerifyPageLoading />}>
      <VerifyContent />
    </Suspense>
  );
}

function VerifyPageLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Invoice Verification
          </h1>
          <p className="text-gray-600">
            Verify the authenticity of your Xhenvolt invoice
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
          <p className="text-gray-600">Loading invoice verification...</p>
        </div>
      </div>
    </main>
  );
}

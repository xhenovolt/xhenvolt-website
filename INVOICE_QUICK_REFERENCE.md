# Invoice Verification - Quick Reference

## 🔗 Test URLs

```
https://yoursite.com/verify?invoice=XHV-INV-2025-0001   (Paid - $45,000)
https://yoursite.com/verify?invoice=XHV-INV-2025-0002   (Partially Paid - $32,500)
https://yoursite.com/verify?invoice=XHV-INV-2025-0003   (Unpaid - $18,750)
https://yoursite.com/verify?invoice=FAKE                (Error example)
```

## 📝 Adding a New Invoice

**File:** `data/invoices.json`

**Step 1:** Open the file

**Step 2:** Add a new object with the next sequential ID:

```json
"XHV-INV-2025-0004": {
  "invoiceId": "XHV-INV-2025-0004",
  "clientName": "New Client Ltd",
  "clientAddress": "123 Street, City, State ZIP, Country",
  "serviceDescription": "Description of services provided",
  "totalAmount": 50000.00,
  "amountPaid": 50000.00,
  "balance": 0.00,
  "status": "Paid",
  "issuedBy": "Xhenvolt Uganda SMC Limited",
  "issueDate": "2025-02-01",
  "currency": "USD"
}
```

**Step 3:** Save the file

**Step 4:** Test at `/verify?invoice=XHV-INV-2025-0004`

✅ **No code changes needed!**

---

## 📋 Invoice Status Values

Use exactly one of these:

- `"Paid"` → Green badge ✅
- `"Partially Paid"` → Amber badge ⚠️
- `"Unpaid"` → Red badge ❌

---

## 💰 Money Fields

Always use numbers (not strings):

```json
"totalAmount": 45000.00,        ✅ Correct
"amountPaid": 45000.00,
"balance": 0.00,

"totalAmount": "45000.00",      ❌ Wrong (string)
"amountPaid": "$45000",
```

**Formula:** `balance = totalAmount - amountPaid`

---

## 📅 Date Format

Always use: `YYYY-MM-DD`

```json
"issueDate": "2025-01-15"       ✅ Correct
"issueDate": "01/15/2025"       ❌ Wrong
"issueDate": "Jan 15, 2025"     ❌ Wrong
```

---

## 💱 Currency Field

Use 3-letter currency codes:

```json
"currency": "USD"               ✅ US Dollar
"currency": "EUR"               ✅ Euro
"currency": "GBP"               ✅ British Pound
"currency": "$"                 ❌ Wrong
```

---

## 🔍 How Lookups Work

Invoice IDs are **case-insensitive**:

```
/verify?invoice=XHV-INV-2025-0001   ✅ Works
/verify?invoice=xhv-inv-2025-0001   ✅ Works
/verify?invoice=XHV-inv-2025-0001   ✅ Works
```

---

## 🚨 Common Errors & Fixes

| Error | Problem | Fix |
|-------|---------|-----|
| Invoice Not Found | ID doesn't match JSON key | Check spelling in `/data/invoices.json` |
| Page hangs on loading | Invalid JSON syntax | Validate at [jsonlint.com](https://jsonlint.com) |
| Balance shows wrong | Math error | Ensure `balance = totalAmount - amountPaid` |
| Amount not formatted | Currency code missing | Add `"currency": "USD"` to invoice |

---

## 🎯 Perfect Invoice Example

```json
"XHV-INV-2025-0005": {
  "invoiceId": "XHV-INV-2025-0005",
  "clientName": "Microsoft Corporation",
  "clientAddress": "One Microsoft Way, Redmond, WA 98052, USA",
  "serviceDescription": "Cloud infrastructure setup, security audit, and ongoing DevOps support",
  "totalAmount": 125000.00,
  "amountPaid": 62500.00,
  "balance": 62500.00,
  "status": "Partially Paid",
  "issuedBy": "Xhenvolt Uganda SMC Limited",
  "issueDate": "2025-02-01",
  "currency": "USD"
}
```

---

## ✨ UI Display

When an invoice is valid, the page shows:

- ✅ **Verification Badge** - Green checkmark
- 📋 **Invoice ID** - Large header
- 👥 **Client Info** - Name + address
- 💵 **Financial Summary** - Total, Paid, Balance
- 📅 **Issue Date**
- 📝 **Service Description**
- 📍 **Status Badge** - Color-coded (Green/Amber/Red)
- 🔗 **Verification URL** - Can be QR-encoded
- ⚠️ **Disclaimer** - "Confirms authenticity only, not a receipt"

---

## 📞 Support

If the verification page doesn't work:

1. Check `/data/invoices.json` syntax (use jsonlint.com)
2. Verify invoice ID format: `XHV-INV-YYYY-XXXX`
3. Ensure all required fields are present
4. Test with a valid ID from the sample invoices
5. Clear browser cache and reload

---

**Version:** 1.0  
**Last Updated:** December 24, 2025  
**Status:** ✅ Production Ready

import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-32 sm:pt-36 md:pt-40 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-8 sm:mb-12 text-center">
          Shipping Policy
        </h1>

        <div className="h-0.5 w-24 bg-black mx-auto mb-12"></div>

        <section className="space-y-10">
          <div>
            <p className="text-gray-800 leading-relaxed">
              This Shipping Policy outlines our procedures and guidelines for
              shipping products purchased from our online store.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 border-b border-gray-200 pb-2">
              SECTION 1 - PROCESSING TIME
            </h2>
            <div className="text-gray-800 leading-relaxed space-y-4">
              <p>
                All orders are processed within 2-3 business days. Orders are
                not shipped or delivered on weekends or holidays.
              </p>
              <p>
                If we are experiencing a high volume of orders, shipments may be
                delayed by a few days. Please allow additional days in transit
                for delivery.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 border-b border-gray-200 pb-2">
              SECTION 2 - SHIPPING RATES & DELIVERY ESTIMATES
            </h2>
            <div className="text-gray-800 leading-relaxed space-y-4">
              <p>
                Shipping charges for your order will be calculated and displayed
                at checkout. We offer the following shipping methods:
              </p>
              <ul className="space-y-2 text-gray-800 list-disc pl-6">
                <li>Standard Shipping (5-7 business days)</li>
                <li>Express Shipping (2-3 business days)</li>
                <li>International Shipping (10-14 business days)</li>
              </ul>
              <p>
                You will receive a shipping confirmation email once your order
                has shipped containing your tracking number(s).
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 border-b border-gray-200 pb-2">
              SECTION 3 - INTERNATIONAL SHIPPING
            </h2>
            <div className="text-gray-800 leading-relaxed space-y-4">
              <p>
                We offer international shipping to select countries. Please note
                that international orders may be subject to import duties and
                taxes upon arrival. These fees are the responsibility of the
                recipient.
              </p>
              <p>
                International shipping times may vary depending on customs
                processing in your country.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 border-b border-gray-200 pb-2">
              SECTION 4 - LOST/MISSING PACKAGES
            </h2>
            <div className="text-gray-800 leading-relaxed space-y-4">
              <p>
                We are not responsible for lost or stolen packages confirmed to
                be delivered to the address provided. If your tracking
                information shows your package was delivered but you
                haven&apos;t received it, please contact your local post office.
              </p>
              <p>
                For packages lost in transit, please contact us within 30 days
                of the estimated delivery date.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 border-b border-gray-200 pb-2">
              SECTION 5 - DAMAGES
            </h2>
            <div className="text-gray-800 leading-relaxed space-y-4">
              <p>
                If your package arrives damaged, please take photos and contact
                us immediately. We will work with you to resolve the situation
                and provide a replacement if necessary.
              </p>
              <p>
                Please save all packaging materials and damaged items until the
                claim process is complete.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 border-b border-gray-200 pb-2">
              SECTION 6 - CHANGES TO SHIPPING POLICY
            </h2>
            <div className="text-gray-800 leading-relaxed space-y-4">
              <p>
                We reserve the right to modify our shipping policy at any time
                without prior notice. Changes will be posted on this page and
                will be effective immediately upon posting.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 border-b border-gray-200 pb-2">
              CONTACT
            </h2>
            <div className="text-gray-800 leading-relaxed bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="mb-4">
                If you have any questions about our shipping policy, please
                contact our customer service team at:
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Essancia Fashion</strong>
                </p>
                <p>Email: contact@essanciafashion.com</p>
                <p>Address: Worli, Mumbai, India</p>
                <p>Phone: +91 8080261261</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 mb-8 text-center text-sm text-gray-500">
          Last updated: June 2023
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;

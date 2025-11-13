import { Card } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12">Last updated: January 15, 2025</p>

        <Card className="gradient-card card-shadow p-8 md:p-12 border-border">
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect minimal information to provide and improve our service:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Usage Data:</strong> Anonymous analytics about page visits and download metrics</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and device information for security purposes</li>
                <li><strong>Contact Information:</strong> Email address only if you contact us voluntarily</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Provide and maintain our website</li>
                <li>Improve user experience and website performance</li>
                <li>Monitor and analyze usage patterns</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Detect and prevent technical issues or security threats</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Cookies and Tracking</h2>
              <p>
                We use Google Analytics to understand how visitors use our site. You can opt out of Google Analytics by:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Using browser settings to block cookies</li>
                <li>Installing the Google Analytics opt-out browser add-on</li>
                <li>Using our cookie consent banner to manage preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Third-Party Services</h2>
              <p>
                We use the following third-party services that may collect information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Google Drive, MEGA, MediaFire:</strong> For hosting download files</li>
                <li><strong>Cloudflare:</strong> For CDN and DDoS protection</li>
                <li><strong>Google Analytics:</strong> For website analytics</li>
              </ul>
              <p className="mt-2">
                Each service has its own privacy policy. We recommend reviewing them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your information. However, 
                no method of transmission over the Internet is 100% secure. We strive to use 
                commercially acceptable means to protect your data but cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of analytics and tracking</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Children's Privacy</h2>
              <p>
                Our service is not intended for children under 13. We do not knowingly collect 
                personal information from children. If you believe we have collected information 
                from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@gta-san-andreas.one" className="text-primary hover:underline">
                  privacy@gta-san-andreas.one
                </a>
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}

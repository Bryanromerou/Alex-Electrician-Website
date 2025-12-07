import { siteBranding } from "@/constants/branding";
import { CheckCircle2 } from "lucide-react";

export function ContactThankYou() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
      <CheckCircle2 className="h-16 w-16 text-primary" />
      <h2 className="text-2xl font-bold">Thank You!</h2>
      <p className="text-muted-foreground max-w-md">
        We've received your message and will get back to you as soon as
        possible. We typically respond within 24 hours.
      </p>
      <div className="pt-4 space-y-2">
        <p className="text-sm text-muted-foreground">Need immediate assistance?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${siteBranding.phoneNumber}`}
            className="text-primary hover:underline font-medium"
          >
            {siteBranding.phoneNumber}
          </a>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <a
            href={`mailto:${siteBranding.email}`}
            className="text-primary hover:underline font-medium"
          >
            {siteBranding.email}
          </a>
        </div>
      </div>
    </div>
  );
}

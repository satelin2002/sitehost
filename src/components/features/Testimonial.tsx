import { Card, CardContent } from "@/components/ui/card";

export function Testimonial() {
  return (
    <Card className="mt-auto">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Join thousands of satisfied users
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          &quot;Site Host has revolutionized our web deployment process.
          It&apos;s incredibly easy to use and the performance is
          outstanding!&quot;
        </p>
        <p className="text-sm sm:text-base text-gray-800 font-medium mt-2">
          - Jane Doe, Tech Innovators Inc.
        </p>
      </CardContent>
    </Card>
  );
}

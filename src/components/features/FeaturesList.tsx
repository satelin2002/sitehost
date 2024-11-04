import { Check, Star } from "lucide-react";

export function FeaturesList() {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
        Why choose Site Host?
      </h2>
      <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        <li className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span>Lightning-fast deployments</span>
        </li>
        <li className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span>Free SSL certificates</span>
        </li>
        <li className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span>24/7 expert support</span>
        </li>
        <li className="flex items-center space-x-3">
          <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
          <span className="font-semibold">Premium: Custom domains</span>
        </li>
        <li className="flex items-center space-x-3">
          <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
          <span className="font-semibold">Premium: Advanced analytics</span>
        </li>
        <li className="flex items-center space-x-3">
          <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
          <span className="font-semibold">Premium: Collaboration tools</span>
        </li>
      </ul>
    </div>
  );
}

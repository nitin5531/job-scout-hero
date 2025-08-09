import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  'NCR job',
  'Gujarat Job', 
  'Pune job',
  'Rajasthan',
  'Haryana'
];

export const LocationFilter = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Location Categories */}
        <div className="flex flex-wrap justify-center gap-1 mb-8">
          {locations.map((location, index) => (
            <div 
              key={location}
              className="bg-white border border-gray-300 px-6 py-3 text-foreground font-medium hover:bg-gray-50 cursor-pointer transition-colors"
              style={{ 
                borderRight: index === locations.length - 1 ? '1px solid #d1d5db' : 'none',
                borderLeft: index === 0 ? '1px solid #d1d5db' : '1px solid #d1d5db'
              }}
            >
              {location}
            </div>
          ))}
        </div>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          {/* Fresher & Experience Dropdown */}
          <div className="relative w-full sm:w-64">
            <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Fresher & Experience</option>
              <option>Fresher</option>
              <option>1-2 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>

          {/* Qualification Dropdown */}
          <div className="relative w-full sm:w-64">
            <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Qualification</option>
              <option>10th Pass</option>
              <option>12th Pass</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
              <option>PhD</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>

          {/* Filter Button */}
          <Button 
            className="w-full sm:w-32 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Filter
          </Button>
        </div>
      </div>
    </section>
  );
};
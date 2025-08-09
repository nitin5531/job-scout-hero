import { Card, CardContent } from '@/components/ui/card';
import { Code, Megaphone, TrendingUp, Users, Stethoscope, GraduationCap, Wrench, Building } from 'lucide-react';

const categories = [
  { icon: Code, name: 'Technology', count: '15,420', color: 'text-blue-500' },
  { icon: TrendingUp, name: 'Finance', count: '8,230', color: 'text-green-500' },
  { icon: Megaphone, name: 'Marketing', count: '6,180', color: 'text-purple-500' },
  { icon: Users, name: 'Human Resources', count: '4,560', color: 'text-orange-500' },
  { icon: Stethoscope, name: 'Healthcare', count: '7,890', color: 'text-red-500' },
  { icon: GraduationCap, name: 'Education', count: '3,240', color: 'text-indigo-500' },
  { icon: Wrench, name: 'Engineering', count: '9,760', color: 'text-yellow-500' },
  { icon: Building, name: 'Construction', count: '2,890', color: 'text-gray-500' },
];

export const JobCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore Jobs by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find opportunities in your field of expertise across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="hover:shadow-brand transition-all duration-300 cursor-pointer bg-gradient-card animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                      <Icon className={`h-8 w-8 ${category.color} group-hover:text-primary transition-colors`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.count} jobs available
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
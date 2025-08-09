import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Briefcase, Clock } from 'lucide-react';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    postedDate: string;
    description: string;
    requirements: string[];
    companyLogo?: string;
  };
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="hover:shadow-brand transition-all duration-300 bg-gradient-card animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {job.companyLogo ? (
              <img src={job.companyLogo} alt={job.company} className="h-12 w-12 rounded-lg" />
            ) : (
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-lg text-muted-foreground font-medium">{job.company}</p>
            </div>
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{job.postedDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{job.salary}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {job.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {req}
            </Badge>
          ))}
          {job.requirements.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{job.requirements.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex space-x-3 pt-2">
          <Button className="flex-1">
            Apply Now
          </Button>
          <Button variant="outline" className="flex-1">
            Save Job
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
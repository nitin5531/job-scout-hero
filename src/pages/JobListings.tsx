import { useParams } from 'react-router-dom';
import { JobCard } from '@/components/JobCard';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, MapPin, Briefcase } from 'lucide-react';

const getLocationJobs = (location: string) => {
  const jobsByLocation = {
    'ncr': [
      {
        id: '1',
        title: 'HOLOSTIK India Ltd Job 2025 : Trainee Assembly जॉब, Greater Noida',
        company: 'HOLOSTIK India Ltd',
        location: 'Greater Noida, NCR',
        type: 'Full-time',
        salary: '₹18,000-25,000',
        postedDate: '2 days ago',
        description: 'Join HOLOSTIK India Ltd as Trainee Assembly in Greater Noida. Excellent opportunity for freshers in manufacturing sector.',
        requirements: ['ITI/Diploma', 'Manufacturing', 'Assembly', 'Quality Control'],
      },
      {
        id: '2',
        title: 'Goodworth Electronics Pvt Ltd Job Vacancy 2025',
        company: 'Goodworth Electronics Pvt Ltd',
        location: 'Noida, NCR',
        type: 'Full-time',
        salary: '₹20,000-30,000',
        postedDate: '1 day ago',
        description: 'Electronics company hiring for multiple positions. Great opportunity for electronics engineers.',
        requirements: ['Electronics', 'Circuit Design', 'Testing', 'B.Tech/Diploma'],
      },
      {
        id: '3',
        title: 'Delhi Metro Rail Corporation Limited Recruitment 2025',
        company: 'DMRC',
        location: 'Delhi, NCR',
        type: 'Government',
        salary: '₹25,000-40,000',
        postedDate: '3 days ago',
        description: 'Delhi Metro is hiring for various technical and non-technical positions. Government job with excellent benefits.',
        requirements: ['Government Job', 'Railways', 'Technical', 'Graduate'],
      },
      {
        id: '4',
        title: 'Maruti Suzuki India Limited Job 2025',
        company: 'Maruti Suzuki',
        location: 'Gurugram, NCR',
        type: 'Full-time',
        salary: '₹30,000-50,000',
        postedDate: '1 week ago',
        description: 'Leading automobile company hiring for production, quality, and engineering roles.',
        requirements: ['Automobile', 'Production', 'Quality Assurance', 'Engineering'],
      },
    ],
    'gujarat': [
      {
        id: '5',
        title: 'Reliance Industries Limited Job 2025',
        company: 'Reliance Industries',
        location: 'Jamnagar, Gujarat',
        type: 'Full-time',
        salary: '₹35,000-60,000',
        postedDate: '2 days ago',
        description: 'Join India\'s largest private sector company. Multiple openings in petrochemicals and refining.',
        requirements: ['Chemical Engineering', 'Petrochemicals', 'Process Engineering', 'Safety'],
      },
      {
        id: '6',
        title: 'Adani Group Recruitment 2025',
        company: 'Adani Group',
        location: 'Ahmedabad, Gujarat',
        type: 'Full-time',
        salary: '₹28,000-45,000',
        postedDate: '1 day ago',
        description: 'Adani Group is hiring for infrastructure, energy, and logistics divisions.',
        requirements: ['Infrastructure', 'Energy', 'Logistics', 'Project Management'],
      },
    ],
    'pune': [
      {
        id: '7',
        title: 'Tata Consultancy Services Job 2025',
        company: 'TCS',
        location: 'Pune, Maharashtra',
        type: 'Full-time',
        salary: '₹25,000-40,000',
        postedDate: '1 day ago',
        description: 'TCS is hiring software engineers and IT professionals for Pune location.',
        requirements: ['Software Development', 'Java', 'Python', 'IT Services'],
      },
      {
        id: '8',
        title: 'Bajaj Auto Limited Recruitment 2025',
        company: 'Bajaj Auto',
        location: 'Pune, Maharashtra',
        type: 'Full-time',
        salary: '₹22,000-35,000',
        postedDate: '3 days ago',
        description: 'Leading two-wheeler manufacturer hiring for production and R&D roles.',
        requirements: ['Automobile', 'Mechanical Engineering', 'Production', 'R&D'],
      },
    ],
    'rajasthan': [
      {
        id: '9',
        title: 'Rajasthan Police Constable Recruitment 2025',
        company: 'Rajasthan Police',
        location: 'Jaipur, Rajasthan',
        type: 'Government',
        salary: '₹21,000-35,000',
        postedDate: '2 days ago',
        description: 'Rajasthan Police is recruiting constables. Government job with good benefits.',
        requirements: ['Police', 'Physical Fitness', '12th Pass', 'Government Job'],
      },
    ],
    'haryana': [
      {
        id: '10',
        title: 'Haryana Roadways Driver Recruitment 2025',
        company: 'Haryana Roadways',
        location: 'Chandigarh, Haryana',
        type: 'Government',
        salary: '₹18,000-28,000',
        postedDate: '1 day ago',
        description: 'Haryana Roadways hiring drivers for state transport services.',
        requirements: ['Driving License', 'Government Job', 'Transport', 'Clean Record'],
      },
    ],
  };

  return jobsByLocation[location as keyof typeof jobsByLocation] || [];
};

export default function JobListings() {
  const { location } = useParams<{ location: string }>();
  const jobs = getLocationJobs(location || '');
  
  const getLocationTitle = (loc: string) => {
    const titles = {
      'ncr': 'NCR Jobs',
      'gujarat': 'Gujarat Jobs', 
      'pune': 'Pune Jobs',
      'rajasthan': 'Rajasthan Jobs',
      'haryana': 'Haryana Jobs'
    };
    return titles[loc as keyof typeof titles] || 'Jobs';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {getLocationTitle(location || '')}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the latest job opportunities in {getLocationTitle(location || '').replace(' Jobs', '')}
            </p>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {jobs.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Latest Job Openings ({jobs.length})
                </h2>
                <p className="text-muted-foreground">
                  Fresh opportunities updated daily
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobs.map((job, index) => (
                  <div 
                    key={job.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                No Jobs Available
              </h3>
              <p className="text-muted-foreground">
                Check back later for new opportunities in this location.
              </p>
            </div>
          )}
          
          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card">
              <CardContent className="p-6 text-center">
                <CalendarDays className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Daily Updates</h3>
                <p className="text-muted-foreground text-sm">
                  New jobs added every day from verified companies
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Local Opportunities</h3>
                <p className="text-muted-foreground text-sm">
                  Jobs specifically curated for your location
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">All Categories</h3>
                <p className="text-muted-foreground text-sm">
                  From entry-level to senior positions across industries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
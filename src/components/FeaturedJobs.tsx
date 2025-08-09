import { JobCard } from './JobCard';

const featuredJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹15-25 LPA',
    postedDate: '2 days ago',
    description: 'Join our dynamic team to build cutting-edge applications using React, Node.js, and cloud technologies. We offer excellent growth opportunities and a collaborative work environment.',
    requirements: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹20-35 LPA',
    postedDate: '1 day ago',
    description: 'Lead product strategy and roadmap for our flagship products. Work with cross-functional teams to deliver exceptional user experiences.',
    requirements: ['Product Management', 'Analytics', 'User Research', 'Agile', 'Leadership'],
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'DataVision Labs',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    salary: '₹12-20 LPA',
    postedDate: '3 days ago',
    description: 'Analyze complex datasets to drive business insights and build machine learning models that impact millions of users.',
    requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'TensorFlow'],
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    company: 'DesignHub',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    salary: '₹8-15 LPA',
    postedDate: '1 week ago',
    description: 'Create beautiful and intuitive user interfaces for web and mobile applications. Collaborate with product teams to enhance user experience.',
    requirements: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'HTML/CSS'],
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudFirst Solutions',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    salary: '₹10-18 LPA',
    postedDate: '4 days ago',
    description: 'Build and maintain robust CI/CD pipelines and infrastructure automation. Work with modern cloud platforms and containerization technologies.',
    requirements: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
  },
  {
    id: '6',
    title: 'Marketing Manager',
    company: 'BrandBoost Digital',
    location: 'Delhi, India',
    type: 'Full-time',
    salary: '₹6-12 LPA',
    postedDate: '5 days ago',
    description: 'Drive digital marketing campaigns and brand awareness initiatives. Manage social media, content marketing, and lead generation strategies.',
    requirements: ['Digital Marketing', 'SEO/SEM', 'Content Strategy', 'Analytics', 'Social Media'],
  },
];

export const FeaturedJobs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Job Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked opportunities from top companies across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job, index) => (
            <div 
              key={job.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <JobCard job={job} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors shadow-brand">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};
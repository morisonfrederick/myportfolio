type imageType = {
  heading: string;
  urls: string;
};

interface ProjectProps {
  name: string;
  images: imageType[];
  description?: string;
  features: string[];
  hosting?: string;
  url?: string;
  stack: string[];
}
export default ProjectProps;

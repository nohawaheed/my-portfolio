export interface Projects {
  projectImage: string;
  projectName: string;
  projectDetails: string;
  tools: [
    {
      bootstrap?: string;
      angular?: string;
      npm?: string;
      fontawesome?: string;
      react?: string;
      html?: string;
      css?: string;
      sass?: string;
      javascript?: string;
      git?: string;
    }
  ];
  links: [{ github: string; website: string }];
}

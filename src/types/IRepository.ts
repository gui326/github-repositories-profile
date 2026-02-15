export interface IRepositoryFiltersProps {
  types: string[];
  languages: string[];
}

export interface IRepositoryProps {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
  archived: boolean;
  fork: boolean;
  mirror_url: string | null;
  sources: boolean;
  owner: {
    login: string;
  };
}

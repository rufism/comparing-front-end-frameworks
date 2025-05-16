import "./page.css";

export interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <div className="page">{children}</div>;
};

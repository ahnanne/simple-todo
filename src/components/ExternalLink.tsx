type ExternalLinkPros = {
  className: string;
  href: string;
  children: React.ReactNode;
};

const ExternalLink = (props: ExternalLinkPros) => {
  const { className, href, children } = props;

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;

function Button({ text, svg, href, className }) {
  return (
    <div className="flex">
      <a href={href} className={className}>
        {text}
        {svg}
      </a>
    </div>
  );
}

export default Button;

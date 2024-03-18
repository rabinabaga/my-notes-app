import "./Card.css";

export default function Card({ result }) {
  return (
    <div className="card">
      <img src={result["avatar_url"]} alt="" />
      <a href={result["html_url"]} target="_blank">{ result["login"]}</a>
    </div>
  );
}

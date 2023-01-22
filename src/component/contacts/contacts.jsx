import "./contacts.css";

export const Contacts = () => {
  return (
    <div className="contact">
      <p className="contact-title">CONTACT SALES</p>
      <ul className="contact-list">
        <li className="contact-item">
          <p>TEL</p>
          <a href="tel:+1-646-791-3726" className="contact-phone">
            646-791-3726
          </a>
        </li>
        <li className="contact-item">
          <select className="contact-select">
            <option value="US">US</option>
            <option value="SP">SP</option>
            <option value="UK">UK</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

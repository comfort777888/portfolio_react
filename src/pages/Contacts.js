const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Astana, Kazakhstan</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telephone / WhatsApp</h2>
            <p>
              <a href="tel:+79051234567">+7 (707) 647-14-98</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">buh01234@mail.ru</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;

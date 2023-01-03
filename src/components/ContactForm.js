import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}} />
      <input type="tel" pattern ="^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$" placeholder="Phone" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      <input type="submit" />
    </form>
  );
};

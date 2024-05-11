import React from "react";

const UserForm = ({data, updadateFieldHandler}) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="Name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ""}
          onChange={(e) => {
            updadateFieldHandler("name", e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
          value={data.email || ""}
          onChange={(e) => {
            updadateFieldHandler("email", e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default UserForm;

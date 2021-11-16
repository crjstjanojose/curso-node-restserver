const { response } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, page = 1 } = req.query;
  res.json({ msg: "get API Router - Controller", q, page });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({ msg: "post API Router - Controller", nombre, edad });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;
  res.json({ msg: "put API Router - Controller", id });
};

const usuariosDelete = (req, res = response) => {
  res.json({ msg: "delete API Router - Controller" });
};

const usuariosPatch = (req, res = response) => {
  res.json({ msg: "patch API Router - Controller" });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
};

const create = async function (req, res) {
    res.send({ message: "Rota está funcionando" });
}

module.exports = {
    create: create,
}
import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
  async index(req, res) {
    const result = await SelecaoRepository.findAll();
    res.json(result);
  }

  async show(req, res) {
    const id = req.params.id;

    try {
      var result = await SelecaoRepository.findById(id);

      res.json(result);
    } catch (e) {
      res.status(404).json({
        error: e.message ?? e,
      });
    }
  }

  async store(req, res) {
    const data = req.body;

    try {
      var result = await SelecaoRepository.create(data);
      res.json(result);
    } catch (e) {
      res.status(404).json({
        error: e.message ?? e,
      });
    }
  }

  async update(req, res) {
    const id = req.params.id;

    const data = req.body;

    try {
      var result = await SelecaoRepository.update(id, data);

      res.json(result);
    } catch (e) {
      res.status(404).json({
        error: e.message ?? e,
      });
    }
  }

  async delete(req, res) {
    const id = req.params.id;

    try {
      var result = await SelecaoRepository.delete(id);

      res.json(result);
    } catch (e) {
      res.status(404).json({
        error: e.message ?? e,
      });
    }
  }
}

// PADRÃO SINGLETON
export default new SelecaoController();

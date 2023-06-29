import connection from "../database/connection.js";

class SelecaoRepository {
  async querySelecaoById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;";

    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) {
          return reject(error);
        }
        if (result.length > 0) {
          return resolve(true);
        }
        resolve(false);
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject("Não foi possível localizar.");

        var jsonData = JSON.parse(JSON.stringify(result));

        return resolve(jsonData);
      });
    });
  }

  create(data) {
    const sql = "INSERT INTO selecoes SET ?;";

    return new Promise((resolve, reject) => {
      connection.query(sql, data, (error, result) => {
        if (error) return reject("Não foi possível cadastrar.");

        return resolve({
          message: "Seleção criada com sucesso!",
          data: data,
        });
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;";

    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) return reject("Não foi possível localizar.");

        if (result.length === 0) return reject("Seleção não encontrada.");

        var jsonData = JSON.parse(JSON.stringify(result[0]));

        return resolve(jsonData);
      });
    });
  }

  async update(id, data) {
    const sql = "UPDATE selecoes SET ? WHERE id=?;";

    if (await this.querySelecaoById(id)) {
      return new Promise((resolve, reject) => {
        connection.query(sql, [data, id], (error, result) => {
          if (error) return reject("Não foi possível localizar.");

          return resolve({
            message: "Seleção atualizada com sucesso!",
            data: data,
          });
        });
      });
    } else {
      throw new Error("Seleção não encontrada.");
    }
  }

  async delete(id) {
    const sql = "DELETE FROM selecoes WHERE id=?;";

    if (await this.querySelecaoById(id)) {
      return new Promise((resolve, reject) => {
        connection.query(sql, id, (error, result) => {
          if (error) return reject("Não foi possível localizar.");

          return resolve({
            message: "Seleção deletada com sucesso!",
          });
        });
      });
    } else {
      throw new Error("Seleção não encontrada.");
    }
  }
}

export default new SelecaoRepository();

import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const getAllModules = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.getAllModules(cid);
    res.json(modules);
  };

  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };

  const deleteModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.deleteModule(moduleId);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  // might not needed ...
  // const findModuleById = async (req, res) => {
  //   const { moduleId } = req.params;
  //   const module = await dao.findModuleById(moduleId);
  //   res.json(course);
  // };

  app.get("/api/courses/:cid/modules", getAllModules);
  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule);
  // app.get("/api/modules/:moduleId", findModuleById);
}

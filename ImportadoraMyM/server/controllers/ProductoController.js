import { ProductoSModel, CompaniaSModel, ProveedorSModel, CabysSModel } from "../models/Relaciones_producto.js";

export const getAllProducto = async (req, res) => {
    try {
        const producto = await ProductoSModel.findAll({
            include:
                [CompaniaSModel, ProveedorSModel, CabysSModel]
        })
        res.json(producto)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getProducto = async (req, res) => {
    try {
        const producto = await ProductoSModel.findAll({
            where: { ID_PRODUCTO: req.params.ID_PRODUCTO }
        })
        res.json(producto[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createProducto = async (req, res) => {
    try {
        const { PROVEEDOR, COMPANIA, CABYS } = req.body;
        const producto = await ProductoSModel.findOne({
            where: { PROVEEDOR }
        });
        if (!producto) {
            return res.json({ message: 'No se encontró un proveedor con el ID proporcionado' });
        }
        const producto2=await ProductoSModel.findOne({
            where:{CABYS}
        })
        if(!producto2){
            return res.json({ message: 'No se encontró un CABYS con el ID proporcionado' });
        }
        const producto3 = await ProductoSModel.findOne({
            where: { COMPANIA }
        });
        if (!producto3) {
            return res.json({ message: 'No se encontró una compañía con el ID proporcionado' });
        }
        await ProductoSModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Actualizar un registro
export const updateProducto = async (req, res) => {
    try {
        // Actualiza los datos del agente
        await ProductoSModel.update(req.body,
            {
                where: { ID_PRODUCTO: req.params.ID_PRODUCTO },
            }
        );

        res.json({
            message: "Registro actualizado correctamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
//Eliminar un registro
export const deleteProducto = async (req, res) => {
    try {
        const { ID_PRODUCTO } = req.params;

        // Buscar el agente de ventas por su ID junto con sus relaciones asociadas
        const producto = await ProductoSModel.findOne({
            where: { ID_PRODUCTO }
        });

        if (!producto) {
            return res.json({ message: 'No se encontró un producto con el ID proporcionado' });
        }

        // Eliminar el agente de ventas
        await producto.destroy();

        res.json({
            message: '¡Registro eliminado correctamente!'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
};

// Actualizar existencia de productos después de crear una factura
export const actualizarExistenciaProductos = async (detallesFactura) => {
    try {
        await Promise.all(
            detallesFactura.map(async (detalle) => {
                const producto = await ProductoSModel.findOne({
                    where: { ID_PRODUCTO: detalle.ID_PRODUCTO },
                });

                if (producto) {
                    const nuevaExistencia = producto.EXISTENCIA_ACTUAL - detalle.CANTIDAD;
                    await producto.update({ EXISTENCIA_ACTUAL: nuevaExistencia });
                }
            })
        );
    } catch (error) {
        console.error(error);
    }
};

//quitar esto mas adelante, porque se crearon 2 const completamente iguales sin darme cuenta
export const autocompleteProducto = async (req, res) => {
    try {
        const { ID_PRODUCTO } = req.params;

        const producto = await ProductoSModel.findOne({
            where: { ID_PRODUCTO }
        });

        if (!producto) {
            return res.json({ message: 'No se encontró un producto con el código proporcionado' });
        }

        res.json(producto);
    } catch (error) {
        res.json({ message: error.message });
    }
};
const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM vehiculo;', (err, vehiculos) => {
            if(err) {
                res.json(err);
            }
            console.log(vehiculos)
            res.render('home', {
                data: vehiculos
            })
        })
    })
};


controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO vehiculo set ?', [data], (err, vehiculo) =>{
            console.log(vehiculo);
            res.redirect("/")
        })
    })
    
};

controller.view = (req,res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM vehiculo;', (err, vehiculos) =>{
            if(err) {
                res.json(err)
            }
            console.log(vehiculos)
            res.render('vehiculos', {
                data: vehiculos
            })
        })
    })
}

controller.delete = (req,res) => {
    
    req.getConnection((err, conn) => {
        const {placa} = req.params;
        conn.query('DELETE FROM vehiculo WHERE placa = ?;', [placa], (err, rows) =>{
            res.redirect('/vehiculos')
        })
    })
}

controller.update = (req, res) => {
    const {placa} = req.params;
    const newVehiculo = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE vehiculo set ? WHERE placa = ?;', [newVehiculo, placa], (err, vehiculo) =>{
            res.redirect('/vehiculos')
        })
    })
}


controller.edit = (req, res) => {
    const {placa} = req.params;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM vehiculo WHERE placa = ?;', [placa], (err, vehiculo) =>{
            res.render('vehiculo_edit', {
                data: vehiculo[0]
            })
        })
    })
}

controller.marcas = (req,res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM marca;', (err, marcas) =>{
            if(err) {
                res.json(err)
            }
            console.log(marcas)
            res.render('marcas', {
                data: marcas
            })
        })
    })
}

controller.save_marca = (req,res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO marca set ?;', [data], (err, marca) =>{
            console.log(marca)
            console.log(data)
            res.redirect("/marcas")
        })
    })
}



controller.lineas = (req,res) => {
    ;

    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM linea;', (err, lineas) =>{
            if(err) {
                res.json(err)
            }
            console.log(lineas)
            res.render('lineas', {
                data: lineas
            })
        })
    })
}

controller.save_lineas = (req,res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO linea set ?;', [data], (err, linea) =>{
            console.log(linea)
            console.log(data)
            res.redirect("/lineas")
        })
    })
}

module.exports = controller;
const express=require("express");
const app=express();
var mysql=require("mysql");
const bodyPareser=require("body-parser");
const { json } = require("express");
app.use(bodyPareser.urlencoded({extended:false}));
app.use(bodyPareser.json());
const config ={
    host: 'b9bgqyullwkheivnwahf-mysql.services.clever-cloud.com',
    user:'uadufcthwtqmsupj',
    password:'f4lDaDIL9tXlI666QPLC',
    database:'b9bgqyullwkheivnwahf',
    port:'3306'

};


const pool=mysql.createPool(config);
app.get('/',(request,response)=>{
    response.sendFile('laptops2.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver/', (request,response)=>{
		
    pool.query("SELECT * FROM laptops; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})


app.get('/audifonos',(request,response)=>{
    response.sendFile('audifonos.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver5/', (request,response)=>{
		
    pool.query("SELECT * FROM audifonos; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.get('/cases',(request,response)=>{
    response.sendFile('cases.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver13/', (request,response)=>{
		
    pool.query("SELECT * FROM cases; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.get('/fuenteP',(request,response)=>{
    response.sendFile('fuenteP.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver11/', (request,response)=>{
		
    pool.query("SELECT * FROM fuente_poder; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.get('/monitor',(request,response)=>{
    response.sendFile('monitor.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver4/', (request,response)=>{
		
    pool.query("SELECT * FROM monitores; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.get('/mouse',(request,response)=>{
    response.sendFile('mouse.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver2/', (request,response)=>{
		
    pool.query("SELECT * FROM mouse; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.get('/motherboard',(request,response)=>{
    response.sendFile('placaM.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver6/', (request,response)=>{
		
    pool.query("SELECT * FROM motherboard; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.get('/procesador',(request,response)=>{
    response.sendFile('procesadores.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver7/', (request,response)=>{
		
    pool.query("SELECT * FROM procesadores; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})
app.get('/ram',(request,response)=>{
    response.sendFile('ram.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver10/', (request,response)=>{
		
    pool.query("SELECT * FROM ram; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.get('/ssd',(request,response)=>{
    response.sendFile('ssd.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver9/', (request,response)=>{
		
    pool.query("SELECT * FROM ssd; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.get('/TarjetaMadre',(request,response)=>{
    response.sendFile('trajetaG.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver8/', (request,response)=>{
		
    pool.query("SELECT * FROM tarjeta_video; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.get('/teclado',(request,response)=>{
    response.sendFile('teclado.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver3/', (request,response)=>{
		
    pool.query("SELECT * FROM teclados; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})
app.get('/ventiladores',(request,response)=>{
    response.sendFile('ventiladores.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver12/', (request,response)=>{
		
    pool.query("SELECT * FROM ventiladores; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})


app.listen(5555,()=>{
    console.log("servicio activo");
});
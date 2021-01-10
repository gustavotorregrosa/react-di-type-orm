import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import HttpContext from '../context/HttpContext'
import { DataGrid } from '@material-ui/data-grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProgressLine from '../components/progressLine'
import Box from '@material-ui/core/Box';


const Delete = props => {
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const [id, setId] = React.useState('')
  const [placa, setPlaca] = React.useState('')
  const [modelo, setModelo] = React.useState('')
  const [ano, setAno] = React.useState('')

  const http = useContext(HttpContext)

  const handleClickOpen = (car = null) => {
    console.log(car)
    if(car){
      setId(car.id)
      setPlaca(car.placa)
      setModelo(car.modelo)
      setAno(car.ano)
    }else{
      setId('')
      setPlaca('')
      setModelo('')
      setAno('')
      
    }

    setOpen(true)

  }

  const handleClose = () => {
    setOpen(false)
  }

  const _delete = e => {
    e.preventDefault()


  }

  useEffect(() => {
      props.setOpenModal(handleClickOpen)
  }, [])


return (
  <div>
    <Dialog 
       fullWidth
       maxWidth="sm"
    open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Car</DialogTitle>
      <DialogContent>
        <Box display="flex" fullWidth>
          <h4>Deseja deletar o carro {modelo} de placa {placa} ano {ano}</h4>
        </Box>
        <Box display="flex" fullWidth>
            

        </Box>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Desistir
          </Button>
          <Button onClick={e => _delete(e)} color="primary">
            Deletar
          </Button>
      </DialogActions>
          {loading ? <ProgressLine /> : null }
    
    </Dialog>

  </div>
);
}



const EditCreate = props => {
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const [id, setId] = React.useState('')
    const [placa, setPlaca] = React.useState('')
    const [modelo, setModelo] = React.useState('')
    const [ano, setAno] = React.useState('')

    const http = useContext(HttpContext)

    const handleClickOpen = (car = null) => {
      if(car){
        setId(car.id)
        setPlaca(car.placa)
        setModelo(car.modelo)
        setAno(car.ano)
      }else{
        setId('')
        setPlaca('')
        setModelo('')
        setAno('')
        
      }

      setOpen(true)

    }
  
    const handleClose = () => {
      setOpen(false)
    }

    const save = async e => {
      e.preventDefault()
      const params = {
        url: '/car/save',
        method: 'post',
        data: {
         id,
         placa,
         modelo,
         ano
        }
      }
      let carData = await http.doFetch(params)
      handleClose()
    }

    useEffect(() => {
        props.setOpenModal(handleClickOpen)
    }, [])


  return (
    <div>
      <Dialog 
         fullWidth
         maxWidth="sm"
      open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Car</DialogTitle>
        <DialogContent>
          <Box display="flex" fullWidth>
            <Box m={2}>   
              <TextField
            // autoFocus
              // inputRef={field => placaInput = field}
              // margin="dense"
              value={placa}
              onChange={(e) => {setPlaca(e.target.value)}}
              
              id="placa"
              label="Placa"
              type="text"
              fullWidth
            />
            </Box>
        
            <Box m={2}>
              <TextField
                // autoFocus
                // inputRef={field => modelolInput = field}
                // margin="dense"
                value={modelo}
                onChange={(e) => {setModelo(e.target.value)}}
                id="modelo"
                label="Modelo"
                type="text"
                fullWidth
                
              />
            </Box>

            <Box m={2}>
              <TextField
                // autoFocus
                // inputRef={field => anoInput = field}
                // margin="dense"
                value={ano}
                onChange={(e) => {setAno(e.target.value)}}
                id="ano"
                label="ano"
                type="text"
                fullWidth
                
              />
            </Box>
          </Box>
          <Box display="flex" fullWidth>
              

          </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={e => save(e)} color="primary">
              Salvar
            </Button>
        </DialogActions>
            {loading ? <ProgressLine /> : null }
      
      </Dialog>

    </div>
  );
}



const Cars = props => {
    const http = useContext(HttpContext)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100, hide: true },
        { field: 'placa', headerName: 'Placa', width: 100 },
        { field: 'modelo', headerName: 'Modelo', width: 150 },
        { field: 'ano', headerName: 'Ano', width: 150, type: 'string'},
        {field: 'acoes', headerName: 'Ações',  width: 200, renderCell: (params)=> {
          return (

            <div>
               <Button onClick={() => {
                    openFormEditCreate(params.row)
                  }}
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{
                    marginRight: '1em'
                  }}
                  >Editar</Button>


              <Button onClick={() => {
                    openFormDelete(params.row)
                  }}
                  variant="contained"
                  color="secondary"
                  size="small"
                  >Deletar</Button>

            </div>
         
          
          
          )
        }}
    ]

    const carsList = [
            {
                id: 0,
                placa: 'ABC-1234',
                modelo: 'Palio',
                ano: 2015
            },
            {
                id: '2163cde5-21bb-4cb1-b658-f63c2c743842',
                placa: 'ABC-1234',
                modelo: 'Palio',
                ano: 2015
            }
        ]
    

    let childOpenFormEditCreate = () => {}
    const openFormEditCreate = (car) => {
      childOpenFormEditCreate(car)
    }


    let childOpenFormDelete = () => {}
    const openFormDelete = (car) => {
      childOpenFormDelete(car)
    }


    return( <Container>
            <br/>
            <br/>
            <br/>

            <Button onClick={() => openFormEditCreate()} variant="outlined" color="primary">
              Add Car
            </Button>

           <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={carsList} columns={columns} pageSize={5} onRowSelected={(params) => {}} disableMultipleSelection/>
            </div>
            <EditCreate setOpenModal={f => childOpenFormEditCreate = f} {...props} />
            <Delete setOpenModal={f => childOpenFormDelete = f} {...props} />
        </Container>)


}

export default Cars
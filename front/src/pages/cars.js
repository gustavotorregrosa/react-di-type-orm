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


const EditCreate = props => {
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const http = useContext(HttpContext)
    const user = useContext(UserContext)

    let placaInput, modelolInput, anoInput


    const handleClickOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
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
              inputRef={field => placaInput = field}
              // margin="dense"
              
              id="placa"
              label="Placa"
              type="text"
              fullWidth
            />
            </Box>
        
            <Box m={2}>
              <TextField
                // autoFocus
                inputRef={field => modelolInput = field}
                // margin="dense"
                id="modelo"
                label="Modelo"
                type="text"
                fullWidth
                
              />
            </Box>

            <Box m={2}>
              <TextField
                // autoFocus
                inputRef={field => anoInput = field}
                // margin="dense"
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={ e => console.log(e)} color="primary">
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
    const user = useContext(UserContext)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'placa', headerName: 'Placa', width: 100 },
        { field: 'modelo', headerName: 'Modelo', width: 150 },
        { field: 'ano', headerName: 'Ano', width: 150, type: 'number'},
    ]

    const carsList = [
            {
                id: 1,
                placa: 'ABC-1234',
                modelo: 'Palio',
                ano: 2015
            },
            {
                id: 2,
                placa: 'ABC-1234',
                modelo: 'Palio',
                ano: 2015
            }
        ]
    

    let childOpenForm = () => {}

    const openForm = () => {
        childOpenForm()
    }


    return( <Container>
            <br/>
            <br/>
            <br/>
           <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={carsList} columns={columns} pageSize={5} onRowSelected={(params) => openForm(params)} disableMultipleSelection/>
            </div>
            <EditCreate setOpenModal={f => childOpenForm = f} {...props} />
        </Container>)


}

export default Cars
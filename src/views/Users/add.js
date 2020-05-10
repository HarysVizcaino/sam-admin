import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';


import usersData from './UsersData'
import { getAllWorkshops } from '../../storage/modules/workshop.module';
import { createUser } from '../../storage/modules/user.module';



const formInicialValues = {
   username: '', 
   password: '',
   email: '',
   phone: '',
   cellphone: '',
   groupId: '3',
   address: '',
   location: '',
   workshopId: '1',
   office: '',
   comission: '',
   status: 0,
   }

  //  ADMIN,
  //  SUPERVISOR,
  //  TECHNICIAN,
  //  CUSTOMER,

   const usersGroup = [
     {
       id: 0,
       name: 'Admin'
     },
     {
       id: 1,
       name: 'Supervisor'
     },
     {
       id: 2,
       name: 'tecnico'
     },
     {
       id: 3,
       name: 'customer'
     }
   ]

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }

  async componentDidMount() {
    const { fetchWorkShops } = this.props;
    await fetchWorkShops();
  }
  async createUser(user) {
    const { addnewUser } = this.props;
    console.log('CreateUser', user);
    await addnewUser(user)
  }

  render() {

    const user = usersData.find( user => user.id.toString() === this.props.match.params.id)
    const { workshopsList } = this.props;
    console.log('ENRENDER', workshopsList);
    // const { workshopList } = workshopModule;
    // console.log({ workshopList });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader>
                <strong>Agregar nuevo</strong> Usuario
              </CardHeader>
              <CardBody>
              <Formik
              initialValues={formInicialValues}
              onSubmit={(values, { setSubmitting }) => {
                this.createUser(values);
              }}
              >
                {({handleChange, handleSubmit, values}) => (
                  <Form className="form-horizontal" onSubmit={handleSubmit}>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="username">Nombre de usuario</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                      type="text" 
                      id="username" 
                      name="username" 
                      placeholder="Text" 
                      onChange={handleChange} 
                      value={values.username}
                      />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email">Correo Electronico</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="email@sam.com" 
                      autoComplete="email" 
                      onChange={handleChange}
                      value={values.email}
                      />
                      
                      <FormText className="help-block">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Telefono</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                      type="text" 
                      id="phone" 
                      name="phone" 
                      placeholder="xxx-xxx-xxxx"  
                      onChange={handleChange}
                      value={values.phone}
                      />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Celular</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                      type="text" 
                      id="cellphone" 
                      name="cellphone" 
                      placeholder="xxx-xxx-xxxx" 
                      onChange={handleChange}
                      value={values.cellphone}
                       />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">contraseña</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                      type="password" 
                      id="password" 
                      name="password" 
                      placeholder="Password" 
                      autoComplete="new-password" 
                      onChange={handleChange}
                      value={values.password}
                       />
                      <FormText className="help-block">introduzca un password complejo</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Direccion</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                      type="textarea" 
                      name="address" 
                      id="address" 
                      rows="3"       
                      placeholder="Direccion..." 
                      onChange={handleChange}
                      value={values.address}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Localidiad</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                      type="textarea" 
                      name="location" 
                      id="location" 
                      rows="3"
                      placeholder="Direccion..." 
                      onChange={handleChange}
                      value={values.location}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Taller</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" 
                      name="workshopId" 
                      id="workshopId" 
                      onChange={handleChange}
                      values={values.workshopId}
                      >
                      {workshopsList && workshopsList.map((item, key) => (<option key={key} value={item.id}>{item.name}</option> ))}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Grupo</Label>
                    </Col>
                    <Col xs="12" md="9" onChange={handleChange}>
                      <Input 
                      type="select" 
                      name="groupId" 
                      id="groupId"
                      onChange={handleChange}
                      value={values.groupId}
                      >
                      {usersGroup && usersGroup.map((item, key) => (<option key={key} value={item.id}>{item.name}</option> ))}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Oficina</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                      type="text" 
                      id="office" 
                      name="office" 
                      placeholder="office" 
                      onChange={handleChange}
                      value={values.office}
                      />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Comision</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                      type="text" 
                      id="comission" 
                      name="comission" 
                      placeholder="xxx-xxx-xxxx" 
                      onChange={handleChange}
                      value={values.comission}
                      />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Estatus</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="status" name="status" value="0" onChange={handleChange}/>
                        <Label check className="form-check-label" htmlFor="status">Activo</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="status" name="status" value="1" onChange={handleChange}/>
                        <Label check className="form-check-label" htmlFor="status">Inactivo</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <Col>
                  <Row>
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                  </Row>
                  </Col>
                </Form>
                )}
                </Formik>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
 const { workshopModule} = state;
 const { workshopsList } = workshopModule;
return {
  workshopsList
};
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkShops: () => dispatch(getAllWorkshops()),
    addnewUser: (user) => dispatch(createUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd);

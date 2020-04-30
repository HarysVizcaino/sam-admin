import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

import usersData from './UsersData'

class User extends Component {

  render() {

    const user = usersData.find( user => user.id.toString() === this.props.match.params.id)

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader>
                <strong>Basic Form</strong> Elements
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nombre de usuario</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="username" name="username" placeholder="Text" />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Correo Electronico</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" name="email" placeholder="email@sam.com" autoComplete="email"/>
                      <FormText className="help-block">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Telefono</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="phone" name="phone" placeholder="xxx-xxx-xxxx" />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Celular</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="cellphone" name="cellphone" placeholder="xxx-xxx-xxxx" />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">contraseña</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password" name="password" placeholder="Password" autoComplete="new-password" />
                      <FormText className="help-block">introduzca un password complejo</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Direccion</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="address" id="address" rows="3"
                             placeholder="Direccion..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Localidiad</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="location" id="location" rows="3"
                             placeholder="Direccion..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Taller</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="workshopId" id="workshopId">
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Grupo</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="workshopId" id="workshopId">
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Oficina</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="office" name="office" placeholder="office" />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Comision</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="commission" name="commission" placeholder="xxx-xxx-xxxx" />
                      <FormText color="muted">requerido</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Radios</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                        <Label check className="form-check-label" htmlFor="radio1">Activo</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                        <Label check className="form-check-label" htmlFor="radio2">Inactivo</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;

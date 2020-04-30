import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSignIn, clearSignIngErrorMessage } from '../../../storage/modules/user.module';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';

class Login extends Component {

  

  componentDidMount() {
    const { clearErrorMessage } = this.props;
    clearErrorMessage();
  }

  render() {
    console.log(this.props);
    const { signIn, signIngErrorMessage,jwtToken } = this.props;

    if(jwtToken) {
      this.props.history.push('/dashboard');
      return null;
    }
    
    return (
      <div className="app flex-row align-items-center">
      <Container>
      <Row className="justify-content-center">
      <Col md="8">
      <CardGroup>
      <Card className="p-4">
      <h1>Login</h1>
      <p className="text-muted">Iniciar Sesion</p>
      <CardBody>
      <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Correo no valido';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            signIn(values.email, values.password);
            setSubmitting(false);
          }, 400);
        }}
        >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          /* and other goodies */
        }) => ( 
          <Form onSubmit={handleSubmit}>
          <p style={{ color: 'red' }}>{errors.email}</p>
          {
            signIngErrorMessage&& (<Alert color="danger">{ signIngErrorMessage }</Alert>)
          }
          <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
          <InputGroupText>
          <i className="icon-user"></i>
          </InputGroupText>
          </InputGroupAddon>
          <Input 
          type="email"
           name="email" 
           placeholder="email" 
           autoComplete="email" 
           onChange={handleChange}
           value={values.email}
            />
          </InputGroup>
          <InputGroup className="mb-4">
          <InputGroupAddon addonType="prepend">
          <InputGroupText>
          <i className="icon-lock"></i>
          </InputGroupText>
          </InputGroupAddon>
          <Input 
          type="password" 
          name="password" 
          placeholder="Password" 
          autoComplete="current-password"  
          onChange={handleChange}
          value={values.password}
          />
          </InputGroup>
          <Row>
          <Col xs="6">
          <Button color="primary" className="px-4" type="submit" >Iniciar</Button>
          </Col>
          <Col xs="6" className="text-right">
          <Button color="link" className="px-0">Olvidate tu contraseña?</Button>
          </Col>
          </Row>
          </Form>
          )}
          </Formik>
          </CardBody>
          </Card>
          <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
          <CardBody className="text-center">
          <div>
          <h2>Registrate</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.</p>
          <Link to="/register">
          <Button color="primary" className="mt-3" active tabIndex={-1}>Registrate!</Button>
          </Link>
          </div>
          </CardBody>
          </Card>
          </CardGroup>
          </Col>
          </Row>
          </Container>
          </div>
          );
        }
      }
      
      const mapStateToProps  = (state) => {
        const { usersModule } = state;
        const { signIngErrorMessage, jwtToken } = usersModule;
        return {
          signIngErrorMessage, 
          jwtToken
        }
      }
      
      const mapDispatchToProps = (dispatch) => ({
        signIn: (email, password) => dispatch(userSignIn(email, password)),
        clearErrorMessage: () => dispatch(clearSignIngErrorMessage()),
      });

      export default connect(mapStateToProps, mapDispatchToProps)(Login);
      
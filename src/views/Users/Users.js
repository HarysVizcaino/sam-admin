import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import { getAllUsers } from '../../storage/modules/user.module';

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status ? 'success' : 'secondary';
  }

  return (
    <tr>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.username}</Link></td>
      <td>{user.cellphone}</td>
      <td>admin</td>
      <td><Link to={userLink}><Badge color={getBadge(user.isActive)}>{user.isActive ? 'Activo': 'Inactivo'}</Badge></Link></td>
    </tr>
  )
}

class Users extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { users } = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { usersModule } = state;
  const { users } = usersModule;
  return { users }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(getAllUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

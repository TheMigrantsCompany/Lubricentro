import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers, suspendUser } from '../../redux/actions/actions';
import { Card } from '@tremor/react';

export function TableLubricadores() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleSuspender = (id) => {
    dispatch(suspendUser(id));
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-800">
          <thead className="text-xs text-black uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">Nombre</th>
              <th scope="col" className="px-6 py-3">Correo</th>
              <th scope="col" className="px-6 py-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">No hay usuarios</td>
              </tr>
            ) : (
              users.map(user => (
                <tr key={user.id_User} className="bg-gray-100 border-b">
                  <td className="px-6 py-4">{user.Name}</td>
                  <td className="px-6 py-4">{user.Mail}</td>
                  <td className="px-6 py-4">
                    <span
                      onClick={() => handleSuspender(user.id_User)}
                      className={`cursor-pointer px-2 py-1 rounded-md ${
                        user.Active ? 'text-blue-600 bg-blue-100' : 'text-red-600 bg-red-100'
                      }`}
                    >
                      {user.Active ? 'Activo' : 'Suspendido'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
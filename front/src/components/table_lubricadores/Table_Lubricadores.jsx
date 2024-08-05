import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/actions/actions';
import { Card } from '@tremor/react';

export function TableLubricadores() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleSuspender = (id) => {
    console.log(`Suspender lubricador con ID ${id}`);
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-800">
          <thead className="text-xs text-black uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">Nombre</th>
              <th scope="col" className="px-6 py-3">Correo</th>
              <th scope="col" className="px-6 py-3">Acciones</th>
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
                    <button
                      onClick={() => handleSuspender(user.id_User)}
                      className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Suspender
                    </button>
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

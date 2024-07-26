const { User } = require('../../config/db');
const { auth } = require('../../middlewares/firebaseAdmin');

const syncUsersFromFirebase = async () => {
    try {
        const listUsersResult = await auth.listUsers();
        const users = listUsersResult.users;

        const userPromises = users.map(async (firebaseUser) => {
        try {
            const [user, created] = await User.findOrCreate({
            where: { Mail: firebaseUser.email },
            defaults: {
                id_User: firebaseUser.uid,
                Name: firebaseUser.displayName || '',
                Mail: firebaseUser.email,
                Password: firebaseUser.password,
                Phone: firebaseUser.phoneNumber || '',
                Image: firebaseUser.photoURL || '',
                Active: true,
                Rol: false // Asigna el rol según tu lógica
            }
        });
        
        if (!created) {
          // Actualizar datos si el usuario ya existía
            await user.update({
                Name: firebaseUser.displayName || '',
                Phone: firebaseUser.phoneNumber || '',
                Image: firebaseUser.photoURL || '',
            });
        }
        } catch (error) {
            console.error(`Error processing user ${firebaseUser.email}:`, error);
        }
    });

    await Promise.all(userPromises);
    console.log('Users synchronized successfully');
    return { message: 'Users synchronized successfully' };
    } catch (error) {
        console.error('Error syncing users:', error);
        throw new Error('Error syncing users');
    }
};

module.exports = syncUsersFromFirebase;
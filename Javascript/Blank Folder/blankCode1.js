function getSession(sessionData) {
    const defaultValues = {
      limit_access: null,
      login_at: null,
    };
  
    // Menggabungkan defaultValues dengan sessionData
    const session = {
      ...defaultValues,
      ...sessionData,
    };
  
    return session;
  }
  
  // Contoh penggunaan
  const sessionFromDB = { id: 1, nama: 'Alice', role: 'admin', limit_access: 5, login_at: new Date(), location: 'NY' };
  const session1 = getSession(sessionFromDB);
  
  const sessionFromDB2 = { id: 2, nama: 'Bob', role: 'user' };
  const session2 = getSession(sessionFromDB2);
  
  console.log(session1); // Akan mencakup location
  console.log(session2); // Tidak mencakup location
  

//   ---- typescript -----
// interface SessionData {
//     id: number;
//     nama: string;
//     role: string;
//     [key: string]: any;  // Membuat tipe yang fleksibel untuk kolom tambahan
//   }
  
//   function getSession(sessionData: SessionData) {
//     const defaultValues = {
//       limit_access: null,
//       login_at: null,
//     };
  
//     // Menggabungkan defaultValues dengan sessionData
//     const session = {
//       ...defaultValues,
//       ...sessionData,
//     };
  
//     return session;
//   }
  
//   // Contoh penggunaan
//   const sessionFromDB: SessionData = { id: 1, nama: 'Alice', role: 'admin', limit_access: 5, login_at: new Date(), location: 'NY' };
//   const session1 = getSession(sessionFromDB);
  
//   const sessionFromDB2: SessionData = { id: 2, nama: 'Bob', role: 'user' };
//   const session2 = getSession(sessionFromDB2);
  
//   console.log(session1); // Akan mencakup location
//   console.log(session2); // Tidak mencakup location
  
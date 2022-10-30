import UserList from "./features/users/UserList";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        BLOG app (CRUD) with redux toolkit
      </h1>
      <UserList />
    </div>
  );
}

export default App;

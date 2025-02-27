import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Aboutus from "./components/Aboutus";
import Blog from "./components/Blog";
import Blog_specific_page from "./components/Blog_specific_page";
import Contact from "./components/Contact";
import Custom_page from "./components/Custom_page";
import Listing_categories from "./components/Listing_categories";
import Listing_specific_page from "./components/Listing_specific_page";
import Pricing from "./components/Pricing";
import Listing_page from "./components/Listing_page";
import PropertyForm from "./components/PropertyForm";
import BlogForm from "./components/BlogForm";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OtpVerification from "./components/OtpVerification";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'
import BlogList from "./components/BlogList";
import ContactsList from "./components/ContactsList";
import Userdashboard from "./components/Userdashboard";
import Admindashboard from "./components/Admindashboard";

const blogPostLoader = async ({ params }) => {
  const response = await fetch(`https://backend-v0ii.onrender.com/api/blogs/${params.id}`);
  if (!response.ok) throw new Response("Not Found", { status: 404 });
  return response.json();
};
const blogsLoader = async () => {
  const response = await fetch(`https://backend-v0ii.onrender.com/api/blogs/`);
  if (!response.ok) throw new Response("Not Found", { status: 404 });
  return response.json();
};

const router = createBrowserRouter([
  { path: "/", element: <Homepage />},
  { path: "/about", element: <Aboutus /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/otpverify", element: <OtpVerification /> },
  { path: "/blog", element: <Blog /> ,loader: blogsLoader},
  { path: "/blog/:id", element: <Blog_specific_page />, loader: blogPostLoader },
  { path: "/contact", element: <Contact /> },
  { path: "/categories", element: <Listing_categories /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/listings", element: <Listing_page /> },
  { path: "/custom", element: <Custom_page /> },
  { path: "/dashboard", element: <Userdashboard /> },
  { path: "/admindashboard", element: <OtpVerification><Admindashboard /></OtpVerification> },


  {
    path: "/listing/:id",
    element: <Listing_specific_page />,
    loader: async ({ params }) => {  // Correctly destructure params
      const [datasen, products] = await Promise.all([
        fetch(`https://backend-v0ii.onrender.com/api/products/${params.id}`),  // Use params.id
        fetch("https://backend-v0ii.onrender.com/api/products/")
      ]);
  
      if (!datasen.ok || !products.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const data = await datasen.json();
      const product = await products.json();
  
      return { data, product };
    },
  },
  
  // ✅ Protected Route for "/add"
  {
    path: "/add",
    element: (
      <ProtectedRoute>
        <PropertyForm />
      </ProtectedRoute>
    ),
  },
  { path: "/contactdata", element: (
    <ProtectedRoute>
      <ContactsList />
    </ProtectedRoute>
  ), },
  { path: "/blogedit", element: (
    <ProtectedRoute>
      <BlogList />
    </ProtectedRoute>
  ), },
  { path: "/createblog", element:  ( <ProtectedRoute>
    <BlogForm />
  </ProtectedRoute>), },
  { path: "/edit", element: ( <ProtectedRoute>
    <ProductList />
  </ProtectedRoute>), },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

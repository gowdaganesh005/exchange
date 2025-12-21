export function isAuthenticated(req:any, res:any, next:any) {
  console.log("--- inside the middleware--- ",req.session)
  
  if (req.session.user) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  }
  
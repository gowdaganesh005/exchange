export function isAuthenticated(req:any, res:any, next:any) {
  
  if (req.session.user) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  }
  
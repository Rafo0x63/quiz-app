import jwt from 'jsonwebtoken'

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization

  if(!authHeader) return res.status(401).json({ message: "No token provided" })
  
  const token = authHeader.split(" ")[1]

  jwt.verify(token, "6f98vZ@8p3L!c90^Qd*e2!nMrbX1gYZ!7qKw", (err) => {
    if (err) return res.status(403).json({ message: "Invalid token" })
    
    next()
  })
}

export default verifyAdmin
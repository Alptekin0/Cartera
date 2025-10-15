import { useState } from "react"


function customHook() {
     const [isOpen, SetisOpen] = useState(true);

     return { isOpen, SetisOpen }
}

export default customHook
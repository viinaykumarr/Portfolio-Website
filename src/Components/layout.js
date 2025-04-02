
export default function Rootlayout({ children }) {
    return (
        <html className="scroll-smooth ">
            <body className="antialiased leading-8 overflow-x-hidden ">
                {children}
            </body>
        </html>
    )
}

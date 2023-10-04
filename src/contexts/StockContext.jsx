import { createContext, useState } from "react";

export const StockContext = createContext({ })

// Item
//{ name, description, quantity, price, category, createdAt, updatedAt }

export function StockContextProvider({ children }) {
    
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('cainelli-stock')
        if (!storedItems) return []

        const items = JSON.parse(storedItems)

        items.forEach((item) => {
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
        })

        return items
    })
    
    // Função para adicionar itens
    const addItem = (item) => {
        setItems(currentState => {
            const updatedItems = [item, ...currentState]
            localStorage.setItem('cainelli-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    // Função para excluir o item
    const deleteItem = (itemId) => {
        setItems(currentState => {
            const updatedItems = currentState.filter(item => item.id !== itemId)
            localStorage.setItem('cainelli-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    // Função para pegar um item
    const getItem = (itemId) => {
        return items.find(item => item.id === +itemId)
    }

    // Função para atualizar um item já existente
    const updateItem = (itemId, newAttributes) => {
        setItems(currentState => {
            const itemIndex = currentState.findIndex(item => item.id === +itemId)
            const updatedItems = [...currentState]
            Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date() })
            localStorage.setItem('cainelli-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const stock = {
        items,
        addItem,
        deleteItem,
        getItem,
        updateItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}
var model = (function() {
    
    function generateMockData() {
        return {
            1: {id: 1, title: 'Go to webshop.', completed: false},
            2: {id: 2, title: 'Buy frontend frameworks.', completed: true},
            3: {id: 3, title: 'Get rid of bad design.', completed: false},
        };
    }
    
    function initialCounterValue() {
        return Object.keys(generateMockData()).length;
    }
    
    return {
        
        items: generateMockData(),
        
        counter: initialCounterValue(),
        
        count: function() {
            return Object.keys(this.items).length;
        },
        
        completed: function() {
            var self = this;
            var count = 0;
            
            Object.keys(self.items).forEach(function(id) {
                if(self.items[id].completed) {
                    count++;
                }
            });
            
            return count;
        },
        
        left: function() {
            return this.count() - this.completed();
        },
        
        shouldMarkAsCompleted: function(id) {
            var completed = true;
            
            if(this.items[id].completed) {
                completed = false;
            }
            
            this.items[id].completed = completed;
        },
        
        isComplete: function(id) {
            return this.items[id].completed === false;
        },
        
        add: function(title) {
            var todoId = ++this.counter;
            
            this.items[todoId] = {
                id: todoId,
                title: title,
                completed: false
            };
        },
        
        remove: function(id) {
            delete this.items[id];
        },
        
        clearCompleted: function() {
            var self = this;
            
            Object.keys(self.items).forEach(function(id) {
                if(self.items[id].completed) {
                    self.remove(id);
                }
            });
        }
        
    };

})();


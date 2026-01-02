#ifndef BINARYTREE_H
#define BINARYTREE_H
#include "Employee.h"

class BinaryTree {
private:
    Employee *root;

    Employee* insert(Employee *r, Employee *newItem){
        if(r == nullptr){
            return newItem;
        }
        else if(r->getId() < newItem->getId())
            r->right = insert(r->right, newItem);
        else{
            r->left = insert(r->left, newItem);
        }
        return r;
    }

    Employee* searchByIdV1(Employee* r, const int _id){
        if(r == nullptr)
            return nullptr;
        else if(r->getId() == _id){
            return r;
        }
        else if(r->getId() < _id){
             return searchByIdV1(r->right, _id);
        } else {
             return searchByIdV1(r->left, _id);
        }
    }

    void inorder(Employee* r) const {
        if (!r) return;   // r == null
        inorder(r->left);
        r->print();
        inorder(r->right);
    }

    Employee* deleteItem(Employee* r, int _id){
        if(!r) // empty tree
            return nullptr;
        else if(_id < r->getId()) // item in left
            deleteItem(r->left, _id);
        else if(_id > r->getId()) // item in right
            deleteItem(r->right, _id);
        else {
           if (r->left == nullptr && r->right == nullptr) // leaf node
                r = nullptr;
            else if (r->left != nullptr && r->right == nullptr) // one child on the left
            {
                r->setId(r->left->getId());
                r->setSalary(r->left->getSalary());
                r->setName(r->left->getName());
                delete r->left;
                r->left = nullptr;
            }
            else if (r->left == nullptr && r->right != nullptr) // one child on the right
            {
                r->setId(r->right->getId());
                r->setSalary(r->right->getSalary());
                r->setName(r->right->getName());
                delete r->right;
                r->right = nullptr;
            }
            else
            {
                Employee* max = findMax(r->left);
                r->setId(max->getId());
                r->setSalary(max->getSalary());
                r->setName(max->getName());
                r->left = deleteItem(r->left, max->getId());
            }
        }
    }

    int height(Employee* r) {
        if(!r)   // if(r == NULL)
            return 0;
        return 1 + max(height(r->left), height(r->right));
    }

    int countLeaves(Employee* r){
        if(!r)
            return 0;
        if(!r->left && !r->right)
            return 1;
        return countLeaves(r->left) + countLeaves(r->right);
    }

    bool isPathMatch(Employee* treeNode, Employee* listNode) {
        if(listNode == nullptr)
            return true;

        if(treeNode == nullptr)
            return false;

        if(treeNode->getId() != listNode->getId())
            return false;

        return isPathMatch(treeNode->left, listNode->left) ||
               isPathMatch(treeNode->right, listNode->left);
    }

    bool hasListPath(Employee* treeNode, Employee* listHead) {
        if(treeNode == nullptr)
            return false;

        if(isPathMatch(treeNode, listHead))
            return true;

        return hasListPath(treeNode->left, listHead) ||
               hasListPath(treeNode->right, listHead);
    }

public:
    BinaryTree(){
        root = nullptr;
    }
    ~BinaryTree() {
        delete root;
    }

    bool isEmpty() {
        return root == nullptr;
    }

    void insert(int _id, string _name, int _salary=1000) {
        Employee* newItem = new Employee(_id, _salary, _name);
        root = insert(root, newItem);
    }

    void searchById(const int _id){
        Employee* item = searchByIdV1(root, _id);
        if(item){
            cout << "find the employee's id: " << item->getId() << endl;
        } else {
            cout << "not found"<< endl;
        }
    }

    Employee* searchByIdV2(const int _salary){
        Employee* r = root;
        while(r && r->getSalary() != _salary){
            if(r->getSalary() < _salary){
                 r = r->right;
            } else {
                r = r->left;
            }
        }
        return r;
    }

    void displayAll() const {
        cout << "=== All Employees (Sorted by ID) ===\n";
        inorder(root);
        cout << "====================================\n";
    }

    Employee* findMin(Employee* r){
        if(!r)    // r == null
            return nullptr;
        else if(!r->left)  // r->left == null
            return r;
        else
            return (findMin(r->left));
    }

    Employee* findMax(Employee* r){
        if(!r)
            return nullptr;
        else if(!r->right)
            return r;
        else
            return (findMax(r->right));
    }

    void deleteItem(int _id){
        Employee* item = deleteItem(root, _id);
        if(item){
            cout << "deleted Item Successfully" << item->getId() << endl;
        } else {
            cout << "not found"<< endl;
        }
    }

    int countLeaves(){
        return countLeaves(root);
    }

    bool isSubPath(Employee* listHead) {
        if(listHead == nullptr)
            return true;

        return hasListPath(root, listHead);
    }

};

#endif

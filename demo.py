from time import sleep
def print_items2(list):
    for item in list:
        sleep(1)
        print item

print_items2([1,2,3,4,5])
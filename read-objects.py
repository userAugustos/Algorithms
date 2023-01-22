
objects = [
    {
        "name": "Felipe Augustos Da Silva",
        "car": "Gol Chevrolet 20",
        "city": "São Paulo"
    },
    {
        "name": "Marcos Augustos Da Silva",
        "car": "Gol Kia 22",
        "city": "São Bento"
    },
    {
        "name": "Brenda Pipi Pa",
        "car": "Jeep 3",
        "city": "Marte"
    },
    {
        "name": "Lucia Pipi Pa",
        "car": "Jeep Augustos 3",
        "city": "Saturno"
    }
]

matched_objects = [];

def filter_by_string(arrObj, strings):
    for obj in arrObj:
        for _, value in obj.items():
            for string in strings: 
                if string in value:
                    matched_objects.append(obj)
    return matched_objects

result = filter_by_string(objects, ["Augustos"])
print(result)